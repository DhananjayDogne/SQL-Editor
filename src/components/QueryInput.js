import React from "react";
import AceEditor from "react-ace";

// Import SQL mode and theme
import "ace-builds/src-noconflict/theme-monokai";
import "ace-builds/src-noconflict/ext-language_tools";
import "ace-builds/src-min-noconflict/mode-mysql";

const QueryInput = ({ query, onQueryChange }) => {
  return (
    <AceEditor
      mode="mysql"  
      theme="monokai"  
      name="query-editor"
      value={query}
      onChange={onQueryChange}
      fontSize={14}
      width="100%"
      height="200px"
      showPrintMargin={false}
      showGutter
      highlightActiveLine
      setOptions={{
        enableBasicAutocompletion: true,
        enableLiveAutocompletion: true,
        enableSnippets: true,
        showLineNumbers: true,
        tabSize: 2,
      }}
    />
    
  );
};

export default QueryInput;


