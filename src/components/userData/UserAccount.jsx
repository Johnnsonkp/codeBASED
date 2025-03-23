import React, {useContext} from "react";

import { UserContext } from "../../store/context/UserContext";

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
      color: '#333'
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

  const {userState} = useContext(UserContext)
  const userInfo = userState.user

  const UserDetails = () => {

    return (
      <div style={styles.formGrid}>
        {[
          { label: "Username", type: "text", value: userInfo.login },
          { label: "Email Address", type: "email", value: userInfo.email || "" },
          { label: "Name", type: "text", value: userInfo.name },
          { label: "City", type: "text", value: userInfo.location },
        ].map((field, index) => (
          <div key={index} style={styles.inputGroup}>
            <label style={styles.label}>{field.label}</label>
            <input type={field.type} style={styles.inputField} value={field.value} readOnly />
          </div>
        ))}
      </div>
    )
  }

  return (
    <section style={styles.accountContainer}>
      <div style={styles.accountWrapper}>
        <div style={styles.card}>
          <div style={styles.cardHeader}>
            <div style={{display: 'flex', flexDirection: 'column', margin: '0px', alignItems: 'flex-start'}}>
              <p style={styles.title}>{userInfo.name || userInfo.login}</p>
              <p style={styles.title}>@{userInfo.login}</p>
              <button>{userInfo.html_url}</button>
            </div>

            <div>
              <img style={{width: '90px', borderRadius: '8px'}} src={userInfo.avatar_url} />
              <div style={{display: 'flex'}}>
                <p style={{color: '#333'}}>Following: {userInfo.following}</p>
                <p style={{color: '#333'}}>Followers: {userInfo.followers}</p>
              </div>
            </div>
          </div>

          <div style={styles.formContainer}>
            <form>
              <UserDetails />
              <hr style={styles.divider} />
              <div style={styles.inputGroup}>
                <label style={styles.label}>About Me</label>
                <textarea style={styles.inputField} rows="4" readOnly value={userInfo.bio}>
                  {userInfo.bio}
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
