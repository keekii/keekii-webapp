import { PrimaryButton, Spinner, SpinnerSize } from '@fluentui/react';
import React, { useState } from 'react';
import styled from 'styled-components';

function LoginPage() {
	const [loading, setLoading] = useState(false);
	return (
		<div>
			<Container></Container>
			<Card className='ms-depth-64'>
				<TitleContainer>
					<i class='ms-Icon ms-Icon--Cloud' aria-hidden='true' style={{ color: '#0078d4', fontSize: 36 }}></i>
					<h5 className='mx-2 my-0 '>iTherapist Adminnn</h5>
				</TitleContainer>
				<h3>Sign in</h3>
				<Form>
					<div class='mb-3'>
						<label for='exampleFormControlInput1' class='form-label mb-0'>
							Email address
						</label>
						<TextInput
							type='email'
							class='form-control'
							id='exampleFormControlInput1'
							placeholder='name@example.com'
						/>
					</div>
					<div class='mb-3'>
						<label for='exampleFormControlInput1' class='form-label mb-0'>
							Password
						</label>
						<TextInput
							type='password'
							class='form-control'
							id='exampleFormControlInput1'
							placeholder='example_password'
						/>
					</div>
				</Form>
				<CreateText>ยังไม่มีบัญชีหรือ </CreateText>
				<CreateLink href='#'>สร้างได้เลย!</CreateLink>
				<ButtonContainer>
					<PrimaryButton className='ms-depth-16' onClick={() => setLoading(!loading)}>
						Sign in
						{loading && <ButtonSpinner size={SpinnerSize.xSmall} />}
					</PrimaryButton>
				</ButtonContainer>
			</Card>
		</div>
	);
}

const ButtonSpinner = styled(Spinner)`
	margin-left: 5px;
`;

const TitleContainer = styled.section`
	display: flex;
	flex-direction: row;
	align-items: center;
	justify-content: center;
	margin-bottom: 10px;
`;

const CreateText = styled.span`
	font-size: 14px;
`;

const CreateLink = styled.a`
	font-size: 14px;
	color: #0467b8;
	text-decoration: none;
`;

const ButtonContainer = styled.section`
	display: flex;
	flex-direction: row;
	justify-content: center;
	algin-items: center;
	margin-top: 20px;
`;

const Logo = styled.i`
	color: red;
`;

const TextInput = styled.input`
& {
    display: flex;
	width: 100%;
	border: 0;
	border-bottom: 1px solid #6D757D;
	border-radius: 0;
	padding: 0.375rem 0;
  }
  &:focus {
      outline: none;
    border-bottom: 1px solid #0178D4;
`;

const Card = styled.section`
	background: #fff;
	padding: 44px;
	min-width: 120px;
	min-height: 320px;
	max-width: 440px;
	width: calc(100% - 40px);
	position: absolute;
	top: calc(50% - 440px / 2);
	left: calc(50% - 440px / 2);
`;

const Form = styled.section`
	display: flex;
	flex-direction: column;
	margin-top: 16px;
`;

const Container = styled.section`
	height: 100vh;
	background-image: url('https://image.freepik.com/free-vector/rainbow-pastel-blurred-background_1639-18444.jpg');
	display: flex;
	justify-content: center;
	align-items: center;
	background-position: center;
	background-repeat: no-repeat;
	background-size: cover;
	filter: blur(100px);
	-webkit-filter: blur(100px);
`;

export default LoginPage;
