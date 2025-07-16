const fs = require('fs');
const path = require('path');

const fetchRawEventsData = async () => {
  let page = 1;
  let allResults = [];
  let hasNextPage = true;

  while (hasNextPage) {
    const response = await fetch(
      `https://api.ravensburgerplay.com/api/v2/events?name=set%20champ&event_status=upcoming&game-slug=disney-lorcana&page_size=100&page=${page}`
    );
    const json = await response.json();

    if (json) {
      allResults.push(json.results);
      hasNextPage = json.next !== null;
      page++;
    } else {
      hasNextPage = false;
    }
  }

  return allResults;
};

const formatEventsData = (data) => {
  return data.map((event) => {
    return {
      name: event.name,
      datetime: new Date(event.start_datetime).toISOString(),
      address: event.full_address,
      shopName: event.store.name,
      eventUrl: `https://tcg.ravensburgerplay.com/events/${event.id}`,
      registeredPlayerCount: event.registered_user_count,
      maxPlayerCount: event.capacity,
      latitude: event.latitude,
      longitude: event.longitude,
    };
  });
};

(async () => {
  try {
    console.log('Fetching raw events data...');
    const rawEventsData = await fetchRawEventsData();

    console.log('Got raw events data, now formatting...');
    const formattedEventsData = formatEventsData(rawEventsData.flat(Infinity));

    console.log('Got formatted data, writing to file...');
    fs.writeFileSync(
      path.join(__dirname, 'events.json'),
      JSON.stringify(formattedEventsData, null, 2)
    );

    console.log('✅ Data written to parsed_events.json');
  } catch (err) {
    console.error('❌ Failed to process events data:', err);
  }
})();
