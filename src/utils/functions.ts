export const generateRandomPosition = (ref: any) => {
    if (ref.current) {
        const box = ref.current.getBoundingClientRect();
        const top = Math.random() * (box.height - 100);
        const left = Math.random() * (box.width - 100);

        return { top, left };
    }
};