import React from "react";

const UserAccount = () => {
  const styles = {
    accountContainer: {
      display: "flex",
      justifyContent: "center",
      padding: "20px",
      // backgroundColor: "#f3f4f6",
      minHeight: "100vh",
    },
    accountWrapper: {
      width: "80%",
      maxWidth: "800px",
      marginTop: "20px",
    },
    card: {
      backgroundColor: "#e2e8f0",
      borderRadius: "10px",
      boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.1)",
      padding: "20px",
    },
    cardHeader: {
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      backgroundColor: "white",
      padding: "10px",
      borderRadius: "8px 8px 0 0",
    },
    title: {
      fontSize: "18px",
      fontWeight: "bold",
      color: "#374151",
    },
    settingsButton: {
      backgroundColor: "#ec4899",
      color: "white",
      fontSize: "12px",
      fontWeight: "bold",
      padding: "8px 15px",
      borderRadius: "5px",
      border: "none",
      cursor: "pointer",
      transition: "0.2s ease-in-out",
    },
    settingsButtonHover: {
      backgroundColor: "#db2777",
    },
    formContainer: {
      padding: "20px",
    },
    sectionTitle: {
      fontSize: "14px",
      fontWeight: "bold",
      color: "#64748b",
      marginBottom: "15px",
      textTransform: "uppercase",
    },
    formGrid: {
      display: "grid",
      gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
      gap: "15px",
    },
    inputGroup: {
      display: "flex",
      flexDirection: "column",
    },
    label: {
      fontSize: "12px",
      fontWeight: "bold",
      color: "#475569",
      marginBottom: "5px",
      textTransform: "uppercase",
    },
    inputField: {
      padding: "10px",
      border: "1px solid #d1d5db",
      borderRadius: "5px",
      backgroundColor: "white",
      fontSize: "14px",
      transition: "0.2s ease-in-out",
    },
    inputFieldFocus: {
      borderColor: "#2563eb",
      outline: "none",
    },
    divider: {
      border: "none",
      height: "1px",
      background: "#cbd5e1",
      margin: "20px 0",
    },
    footer: {
      textAlign: "center",
      padding: "15px",
      fontSize: "12px",
      color: "#64748b",
    },
    footerLink: {
      color: "#64748b",
      textDecoration: "none",
    },
    footerLinkHover: {
      color: "#1e293b",
    },
  };

  return (
    <section style={styles.accountContainer}>
      <div style={styles.accountWrapper}>
        <div style={styles.card}>
          {/* Header */}
          <div style={styles.cardHeader}>
            <h6 style={styles.title}>My Account</h6>
          </div>

          {/* Form */}
          <div style={styles.formContainer}>
            <form>
              {/* User Information */}
              <h6 style={styles.sectionTitle}>User Information</h6>
              <div style={styles.formGrid}>
                {[
                  { label: "Username", type: "text", value: "lucky.jesse" },
                  { label: "Email Address", type: "email", value: "jesse@example.com" },
                  { label: "First Name", type: "text", value: "Lucky" },
                  { label: "Last Name", type: "text", value: "Jesse" },
                ].map((field, index) => (
                  <div key={index} style={styles.inputGroup}>
                    <label style={styles.label}>{field.label}</label>
                    <input type={field.type} style={styles.inputField} value={field.value} readOnly />
                  </div>
                ))}
              </div>

              <hr style={styles.divider} />

              {/* Contact Information */}
              <h6 style={styles.sectionTitle}>Contact Information</h6>
              <div style={styles.formGrid}>
                {[
                  { label: "Address", type: "text", value: "Bld Mihail Kogalniceanu, nr. 8 Bl 1, Sc 1, Ap 09" },
                  { label: "City", type: "text", value: "New York" },
                  { label: "Country", type: "text", value: "United States" },
                  { label: "Postal Code", type: "text", value: "Postal Code" },
                ].map((field, index) => (
                  <div key={index} style={styles.inputGroup}>
                    <label style={styles.label}>{field.label}</label>
                    <input type={field.type} style={styles.inputField} value={field.value} readOnly />
                  </div>
                ))}
              </div>

              <hr style={styles.divider} />

              {/* About Me */}
              <h6 style={styles.sectionTitle}>About Me</h6>
              <div style={styles.inputGroup}>
                <label style={styles.label}>About Me</label>
                <textarea style={styles.inputField} rows="4" readOnly>
                  A beautiful UI Kit and Admin for JavaScript & Tailwind CSS. It is Free and Open Source.
                </textarea>
              </div>
            </form>
          </div>
        </div>

        {/* Footer */}
        {/* <footer style={styles.footer}>
          Made with{" "}
          <a href="https://www.creative-tim.com/product/notus-js" target="_blank" rel="noopener noreferrer" style={styles.footerLink}>
            Love
          </a>{" "}
          by{" "}
          <a href="https://www.creative-tim.com" target="_blank" rel="noopener noreferrer" style={styles.footerLink}>
            Chinonso.io
          </a>
          .
        </footer> */}
      </div>
    </section>
  );
};

export default UserAccount;
