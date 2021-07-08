import React, { useState } from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import { useTheme } from "@material-ui/core/styles";
import Tags from "@yaireo/tagify/dist/react.tagify";

// @material-ui/icons components
// import PlayArrowIcon from '@material-ui/icons/PlayArrow';



// core components


const baseTagifySettings = {
  blacklist: [],
  maxTags: 6,
  backspace: "edit",
  placeholder: "",
  editTags: 1,
  dropdown: {
    enabled: 0
  },
  callbacks: {}
};

export default function TagField({ label, name, initialValue = [], suggestions = [], setTags }) {
  
  const handleChange = e => {
    setTags(e.detail.tagify.value.map(item => item.value));
  };

  const settings = {
    ...baseTagifySettings,
    whitelist: suggestions,
    callbacks: {
      add: handleChange,
      remove: handleChange,
      blur: handleChange,
      edit: handleChange,
      invalid: handleChange,
      click: handleChange,
      focus: handleChange,
      "edit:updated": handleChange,
      "edit:start": handleChange
    }
  };

  console.log("InitialValue", initialValue);

  return (
    <div className="form-group">
      <label htmlFor={"field-" + name}>{label}</label>
      <Tags settings={settings} initialValue={initialValue} />
    </div>   
  );
}