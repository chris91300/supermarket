export default function scrollIn(element: HTMLElement) {
    element.scrollIntoView({ behavior: "smooth", block: "center" });
}
