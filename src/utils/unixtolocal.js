const unixToLocal = target => {
    const monthArray = [
        'Jan',
        'Feb',
        'Mar',
        'Apr',
        'May',
        'Jun',
        'Jul',
        'Aug',
        'Sep',
        'Oct',
        'Nov',
        'Dec',
    ];

    const dateObject = new Date(target);

    const date = dateObject.getDate();
    const month = monthArray[dateObject.getMonth()];
    const year = dateObject.getFullYear();
    const hour = dateObject.getHours() % 12 || 12;
    const ampm = dateObject.getHours() >= 12 ? 'pm' : 'am';
    const minutes = Math.floor(dateObject.getMinutes() / 10)
        ? dateObject.getMinutes()
        : `0 ${dateObject.getMinutes()}`;

    return `${month} ${date}, ${year} ${hour}:${minutes} ${ampm}`;
};

export default unixToLocal;
