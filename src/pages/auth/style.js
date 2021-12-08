const styles = (theme) => ({
  root: {
    padding: 8,
    overflow: "hidden",
  },
  item: {
    margin: 12,
    display: "inline-block",
    backgroundColor: theme.palette.primary.main,
  },
  loginColumn: {
    flex: "50%",
    position: "relative",
    [`${theme.breakpoints.down("sm")} and (orientation: landscape)`]: {
      flex: "100%",
      display: "flex",
      flexDirection: "column",
      justifyContent: "space-around",
      alignItems: "center",
      width: "100%",
      overflow: "hidden",
    },
  },
});
