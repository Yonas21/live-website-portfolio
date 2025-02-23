import React from 'react'

const Fallback = () => {
  return (
		<div
			style={{
				height: "100vh",
				display: "flex",
				flexDirection: "column",
				justifyContent: "center",
				alignItems: "center",
				background: "var(--color-bg)",
				color: "var(--color-primary)",
			}}
		>
			<div
				style={{
					width: "50px",
					height: "50px",
					border: "5px solid var(--color-primary-variant)",
					borderTop: "5px solid var(--color-primary)",
					borderRadius: "50%",
					animation: "spin 1s linear infinite",
				}}
			/>
			<h2 style={{ marginTop: "1rem" }}>Loading...</h2>
			<style>{`
          @keyframes spin {
            0% { transform: rotate(0deg); }
            100% { transform: rotate(360deg); }
          }
        `}</style>
		</div>
  );
}

export default Fallback