// ---------accordion----------

document.addEventListener("DOMContentLoaded", function () {
    const accordionHeaders = document.querySelectorAll(".accordion-header");
  
    accordionHeaders.forEach((header) => {
      header.addEventListener("click", function () {
        const accordionItem = this.parentElement;
        const accordionContent = accordionItem.querySelector(".accordion-content");
  
        // Закрываем все блоки перед открытием текущего
        const allAccordionItems = document.querySelectorAll(".accordion-item");
        allAccordionItems.forEach((item) => {
          if (item !== accordionItem) {
            const content = item.querySelector(".accordion-content");
            content.style.display = "none";
          }
        });
  
        // Открываем или закрываем текущий блок
        if (accordionContent.style.display === "block") {
          accordionContent.style.display = "none";
        } else {
          accordionContent.style.display = "block";
        }
      });
    });
  });
  