const styles = {
  base: [
    "text-white",
    "px-6",
    "py-2",
    "rounded",
    "cursor-pointer",
    "max-w-[325px]",
  ],
  info: ["bg-blue-400", "hover:bg-blue-500"],
  success: ["bg-green-100", "hover:bg-green-200"],
  error: ["bg-red-400", "hover:bg-red-500", "!text-black"],
};

export function toast(msg: string, type?: keyof typeof styles) {
  const toastContainer = document.getElementById("toast-container");

  if (!toastContainer) {
    console.error("Toast container not found");
    return;
  }

  const children = toastContainer?.children!;
  if (children.length < 10) {
    const toast = document.createElement("div");
    toast.className = "toast";
    toast.textContent = msg;

    toast.classList.add(...styles.base, ...styles[type || "info"]);
    toast.classList.add("animate-toastLeft");

    const destroy = () => {
      toast.classList.remove("animate-toastLeft");
      toast.classList.add("animate-toastRight");

      setTimeout(() => {
        toast.remove();
      }, 200);
    };

    toast.addEventListener("click", destroy);

    toastContainer.appendChild(toast);

    setTimeout(() => {
      destroy();
    }, 5000);
  }
}
