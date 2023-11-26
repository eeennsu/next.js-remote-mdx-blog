export const getFormattedDate = (dateString: string): string => {

    const date = new Date(dateString);

    return new Intl.DateTimeFormat('ko-KR', { 
        dateStyle: 'short',
        timeStyle: 'short',
        timeZone: 'Asia/Seoul'
    }).format(date);
}