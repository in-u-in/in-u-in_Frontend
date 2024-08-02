//Calendar 헤더
export default function Toolbar(toolbar) {
  const { date } = toolbar;

  const handleYearChange = (e) => {
    const newDate = new Date(date);
    newDate.setFullYear(e.target.value);
    toolbar.onNavigate('DATE', newDate);
  };

  const renderYearOptions = () => {
    const years = [];
    const currentYear = new Date().getFullYear();
    for (let year = currentYear - 5; year <= currentYear + 5; year++) {
      years.push(
        <option key={year} value={year}>
          {year}
        </option>
      );
    }
    return years;
  };

  const handleMonthChange = (e) => {
    const newDate = new Date(date);
    newDate.setMonth(e.target.value);
    toolbar.onNavigate('DATE', newDate);
  };

  const renderMonthOptions = () => {
    const enMonths = [
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
    const months = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
    return months.map((month) => (
      <option key={month} value={month}>
        {enMonths[month]}
      </option>
    ));
  };

  return (
    <div className='rbc-toolbar'>
      <span className='rbc-toolbar-label'>
        <select onChange={handleYearChange} value={date.getFullYear()}>
          {renderYearOptions()}
        </select>
        <select onChange={handleMonthChange} value={date.getMonth()}>
          {renderMonthOptions()}
        </select>
      </span>
    </div>
  );
}
