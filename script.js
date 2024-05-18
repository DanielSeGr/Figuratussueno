document.addEventListener('DOMContentLoaded', function() {
    const slider = document.getElementById('brightness-slider');
    const targetElement = document.getElementById('target-element');
    const brightnessValueDisplay = document.getElementById('brightness-value');

    function updateBrightness() {
        const brightnessValue = slider.value;
        targetElement.style.filter = `brightness(${brightnessValue}%)`;
        brightnessValueDisplay.textContent = `${brightnessValue}%`;
    }

    slider.addEventListener('input', updateBrightness);

    // Initialize the display on page load
    updateBrightness();
});
