document.addEventListener('DOMContentLoaded', function () {
    const robot = document.getElementById('robot');
    const content = document.getElementById('content');
    const buttons = document.querySelectorAll('.content-button');
    const contentSections = document.querySelectorAll('.content-mid');

    setTimeout(() => {
        robot.classList.remove('hidden');
    }, 0);

    setTimeout(() => {
        content.classList.remove('hidden');
    }, 0);

    buttons.forEach(button => {
        button.addEventListener('click', function () {
            const target = this.getAttribute('data-target');

            contentSections.forEach(section => {
                section.classList.add('hidden');
            });

            document.getElementById(`${target}-content`).classList.remove('hidden');
        });
    });
});
