const checkDate = ( date ) => {
    const year = new Date().getFullYear();
    const month = new Date().getMonth() + 1;
    const day = new Date().getDate();

    const inputYear = Number(date.split('-')[0]);
    const inputMonth = Number(date.split('-')[1]);
    const inputDay = Number(date.split('-')[2]);

    if (inputYear < year) {
        alert('incorrect date,please check it');
        return false;
    } else if (inputYear === year && inputMonth < month) {
        alert('incorrect date,please check it');
        return false;
    } else if (inputYear === year && inputMonth === month && inputDay < day) {
        console.log(false);
        alert('incorrect date,please check it');
        return false;
    } else if (!inputDay || !inputMonth || !inputYear) {
        alert('incorrect date,please check it');
        return false;
    } else if (inputYear.toString().length !== 4) {
        alert('incorrect date,please check it');
        return false;
    }

    return true;
};

export default checkDate;
