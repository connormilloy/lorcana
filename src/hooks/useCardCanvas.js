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

      const dpr = window.devicePixelRatio || 1;
      const displayWidth = 350;
      const aspectRatio = img.height / img.width;

      canvas.style.width = `${displayWidth}px`;
      canvas.style.height = `${displayWidth * aspectRatio}px`;

      canvas.width = displayWidth * dpr;
      canvas.height = displayWidth * aspectRatio * dpr;

      ctx.scale(dpr, dpr);

      ctx.clearRect(0, 0, canvas.width, canvas.height);
      ctx.drawImage(img, 0, 0, displayWidth, displayWidth * aspectRatio);

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
