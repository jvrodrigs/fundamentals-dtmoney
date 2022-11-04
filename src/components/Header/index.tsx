import { HeaderContainer, HeaderContent, NewTranscButton } from "./styles";
import { NewTransactionalModal } from "../NewTransactionalModal";
import * as Dialog from '@radix-ui/react-dialog';

import logo from "../../assets/ignite-logo.svg";

export function Header() {
    return(
        <HeaderContainer>
            <HeaderContent>
                <img src={logo} alt="" />

                <Dialog.Root>
                    <Dialog.Trigger asChild>
                        <NewTranscButton>Nova transação</NewTranscButton>
                    </Dialog.Trigger>

                    <NewTransactionalModal />
                </Dialog.Root>
            </HeaderContent>
        </HeaderContainer>
    )
}