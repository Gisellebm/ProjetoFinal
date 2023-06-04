import { BiSearch, BiReceipt } from 'react-icons/bi';
import { FiLogOut } from 'react-icons/fi'
import { Container, Logo, Logout } from "./styles";
import { Input } from "../Input";
import { Button } from "../Button";
import polygonIcon from "../../assets/polygonIcon.svg";


export function Header() {
    return (
        <Container>

            <nav className='isAdmin'>
                <Logo>
                    <img src={polygonIcon} alt="Imagem de um polígono cinza" />
                    <h1>food explorer</h1>
                </Logo>
                
                <Input
                    className="search"
                    icon={BiSearch} 
                    placeholder="Busque por pratos ou ingredientes"
                />

                <Button 
                    icon={BiReceipt} 
                    title={ 'Meu pedido (0)'} 
                    className="cart"
                />

                <Logout>
                    <FiLogOut />
                </Logout>

            </nav>

        </Container>
    )
}