export const CalendarConfigForm = function (
  showBackdrop,
  retriveCalendarValue
) {
  return {
    disableMobile: true,
    wrap: true,

    onOpen: function () {
      showBackdrop(true);
    },

    onClose: function (_, dateStr) {
      showBackdrop(false);

      // will be stored the user picked date at setCalendarValue()
      if (!dateStr) return;
      retriveCalendarValue(dateStr);
    },
  };
};

export const CalendarConfigReplace = function (replaceCalendarValue) {
  return {
    disableMobile: true,
    wrap: true,

    onClose: function (_, dateStr) {
      replaceCalendarValue(dateStr);
    },
  };
};
