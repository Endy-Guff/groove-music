import s from './sign-in.module.scss'
import {GlassCard} from "../../components/glass-card/glass-card.tsx";
import {Title} from "../../components/title/title.tsx";
import {Input} from "../../components/input/input.tsx";
import {Button} from "../../components/button/button.tsx";
import logo from '../../assets/images/logo.svg'

export const SignIn = () => {
    return (
        <div className={s.wrapper}>
            <img className={s.logo} src={logo} alt=""/>
            <GlassCard>
                <div className={s.inner}>
                    <Title>Sign In</Title>
                    <p className={s.text}>One step to music</p>
                    <div className={s.formBox}>
                        <Input variant={'authorization'} placeholder={'Email'}/>
                        <Input variant={'authorization'} placeholder={'Password'}/>
                        <Button variant={'authorization'}>Sign In</Button>
                    </div>
                    <a className={s.link} href="/sign-up">Sign Up</a>
                </div>
            </GlassCard>
        </div>

    );
};
