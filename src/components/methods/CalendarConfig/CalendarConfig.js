export const CalendarConfigForm = function (
  showBackdrop,
  retriveCalendarValue
) {
  return {
    disableMobile: true,
    wrap: true,
    appendTo: document.getElementById("calendar-container"),

    onOpen: function () {
      showBackdrop(true);
    },

    onClose: function (_, dateStr) {
      showBackdrop(false);

      // will be stored to the user picked date at setCalendarValue()
      if (!dateStr) return;
      retriveCalendarValue(dateStr);
    },
  };
};

export const CalendarConfigReplace = function (replaceCalendarValue) {
  return {
    disableMobile: true,
    wrap: true,
    appendTo: document.getElementById("calendar-container"),

    onClose: function (_, dateStr) {
      replaceCalendarValue(dateStr);
    },
  };
};
