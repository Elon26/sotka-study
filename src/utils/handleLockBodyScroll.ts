export function handleLockBodyScroll(action: "lock" | "unlock"): void {
    if (action === "lock") {
        document.body.style.overflow = "hidden";
    }
    if (action === "unlock") {
        document.body.style.overflow = "visible";
    }
}