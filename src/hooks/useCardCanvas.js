import { useEffect, useRef } from 'react';

const useCardCanvas = (card, { obscure = false, region = {} } = {}) => {
  const canvasRef = useRef(null);

  useEffect(() => {
    if (!card?.image || !canvasRef.current) return;

    const imageUrl = `https://milloy.dev/api/lorcana/image-proxy?url=${encodeURIComponent(card.image)}`;

    const img = new Image();
    img.crossOrigin = 'anonymous';
    img.src = imageUrl;

    img.onload = () => {
      const canvas = canvasRef.current;
      const ctx = canvas.getContext('2d');
      canvas.width = img.width;
      canvas.height = img.height;

      ctx.clearRect(0, 0, canvas.width, canvas.height); // clear previous render
      ctx.drawImage(img, 0, 0);

      if (obscure) {
        const { x, y, width, height } = region;
        ctx.fillStyle = 'rgba(0, 0, 0, 1)';
        ctx.fillRect(x, y, width, height);
      }
    };
  }, [card, obscure, region]);

  return canvasRef;
};

export default useCardCanvas;
