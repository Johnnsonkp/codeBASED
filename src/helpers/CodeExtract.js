export const extractCodeInstructions = (str) => {
  const endIndex = str.indexOf('*/');
  if (endIndex !== -1) {
    const extracted = str.slice(0, endIndex + 2); // Include `*/` in the result
    return extracted;
  } else {
    console.log("End marker `*/` not found.");
    return ('/* test */');
  }
}