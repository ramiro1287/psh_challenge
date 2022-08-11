// Default Buttons
export const defaultBtn = {
  borderRadius: "25px",
  fontSize: "12px",
  fontWeight: 700,
  lineHeight: "15px",
  padding: "12px 33px",
  "&:hover": {
    backgroundColor: "inherit",
    opacity: "0.8",
  },
};

export const defaultBtnLarge = {
  fontSize: "16px",
  lineHeight: "16px",
  padding: "15px 35px",
};

// Contained Buttons
export const contained = {
  ...defaultBtn,
  backgroundColor: "#FFF",
   boxShadow: "0 3px 6px #00000029",
  color: "black",
   "&:hover": {
    backgroundColor: "#FFF",
     boxShadow: "0 3px 6px #00000029",
   },
};

export const containedSecondary = {
  ...contained,
  backgroundColor: "#25D37E",
  color: "#FFF",
  "&:hover": {
    backgroundColor: "#25D37E",
  },
};

// Outlined Buttons
export const outlined = {
  ...defaultBtn,
  backgroundColor: "transparent",
  borderWidth: "2px",
  boxShadow: "0 3px 6px #00000029",
  padding: "10px 31px",
  "&:hover": {
    backgroundColor: "transparent",
    boxShadow: "0 3px 6px #00000029",
  },
};

export const outlinedPrimary = {
  ...outlined,
  borderColor: "#792BBC",
  "&:hover": {
    borderWidth: "2px",
  },
};

export const outlinedSecondary = {
  ...outlined,
  "&:hover": {
    borderWidth: "2px",
  },
};

export const outlinedSizeLarge = {
  ...defaultBtnLarge,
  padding: "13px 33px",
};

// Text Buttons
export const textBtnPrimary = {
  ...defaultBtn,
  "&:hover": {
    backgroundColor: "transparent",
  },
};

export const textBtnSecondary = {
  ...defaultBtn,
  "&:hover": {
    backgroundColor: "transparent",
  },
};
