//  ButtonCancel.tsx et BuutonClose.tsx
const closeComponent = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    e.preventDefault();
    close(); // close est donné en props
};
