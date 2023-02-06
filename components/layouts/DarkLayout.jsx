// Layout que puede ser usado de forma anidada junto con otros Layouts
// Sirve como composición al diseño original del Layout Principal

export const DarkLayout = ({ children }) => {
    return (
      <div
        style={{
          backgroundColor: "rgba(0,0,0,.1)",
          borderRadius: "5px",
          padding: "2rem",
        }}
      >
        <h5>Dark Layout</h5>
        <div>{children}</div>
      </div>
    );
  };
  