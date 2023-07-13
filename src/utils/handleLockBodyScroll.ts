export function handleLockBodyScroll(action: "lock" | "unlock"): void {
    if (action === "lock") {
        document.body.style.overflowY = "hidden";
    }
    if (action === "unlock") {
        document.body.style.overflowY = "visible";
    }
}