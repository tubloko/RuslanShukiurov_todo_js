export default class FilterManager {
    allTask () {
        document
            .querySelectorAll('li')
            .forEach(a => {
            a.classList.remove('unVisible');

        });
    }

    activeTask () {
        document
            .querySelectorAll('li')
            .forEach(a => {
            if (a.value) {
                a.classList.toggle('unVisible');
            }
        });
    }

    doneTask () {
        document
            .querySelectorAll('li')
            .forEach(a => {
            if (!a.value) {
                a.classList.toggle('unVisible');
            }
        });
    }
}
