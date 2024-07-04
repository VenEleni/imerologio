// LoginForm.js

import React, { useState } from "react";
import { Form, Button } from "react-bootstrap";

const LoginForm = () => {
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");

	const handleEmailChange = (e) => {
		setEmail(e.target.value);
	};

	const handlePasswordChange = (e) => {
		setPassword(e.target.value);
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		// Handle login logic here (e.g., send credentials to server)
		console.log("Login submitted:", { email, password });
	};

	return (
		<div
			style={{
				display: "flex",
				justifyContent: "center",
				alignItems: "center",
				height: "100vh",
			}}
		>
			<Form
				onSubmit={handleSubmit}
				style={{
					width: "400px",
					padding: "20px",
					border: "1px solid #ccc",
					borderRadius: "8px",
					boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
				}}
			>
				<h2 style={{ textAlign: "center", marginBottom: "20px" }}>
					Login
				</h2>

				<Form.Group controlId="formBasicEmail">
					<Form.Label>Email address</Form.Label>
					<Form.Control
						type="email"
						placeholder="Enter email"
						value={email}
						onChange={handleEmailChange}
						required
						size="m"
					/>
				</Form.Group>

				<Form.Group controlId="formBasicPassword">
					<Form.Label>Password</Form.Label>
					<Form.Control
						type="password"
						placeholder="Password"
						value={password}
						onChange={handlePasswordChange}
						required
						size="m"
					/>
				</Form.Group>

				<Button
					className="mt-3"
					variant="primary"
					type="submit"
					size="m"
					style={{ width: "100%" }}
				>
					Login
				</Button>
			</Form>
		</div>
	);
};

export default LoginForm;
