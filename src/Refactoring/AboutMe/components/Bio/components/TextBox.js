import { StyledParagraph, StyledParagraphsBox, StyledPhoto, StyledTextBox } from "../../../styledComponents/styledAboutMe"
import photoAnimated from "Assets/images/photo-abaut_me/thomas-bio-2-dark-slow_animation.gif"
import { motion } from "framer-motion"


function TextBox(props) {

    return (
        <StyledTextBox>
            <StyledPhoto
                as={motion.img}
                whileHover={{ scale: props.width > 700 ? 1.3 : 1 }}
                transition={{ type: 'spring', stiffness: 200, originX: 0 }}
                src={photoAnimated}
                position={"left"}
                alt="me"
            />
            <StyledParagraphsBox>
                <StyledParagraph>
                    Vivo secondo natura e amo osservare; è così che dò vita ai
                    miei progetti. Lasciandomi ispirare da ciò che mi circonda
                    e seguendo il mio istinto.
                </StyledParagraph>
                <StyledParagraph>
                    Nella vita privata, i miei più grandi interessi sono
                    l'antiquariato - che coltivo andando a ricercare oggetti
                    curiosi e unici nei più grandi mercatini e mercati -, fotografia
                    analogica - amo pensare che con lo scatto analogico si riesca a
                    immortalare l'attimo, cogliendo l'unicità del momento, mantenendolo
                    puro e inviolato - e la natura - immergo corpo e spirito nella natura,
                    contemplandola, ascoltando i suoi suoni... e meditando senza pensieri.
                </StyledParagraph>
                <StyledParagraph>
                    Durante le esperienze che ho affrontato nella vita, ho compreso
                    che se non si vuole rimanere fermi e statici c'è bisogno di
                    flessibilità e tenacia, oltre a una buona dose di volontà.
                    Perché, come recita la mia frase preferita: “Chi vuol muovere
                    il mondo, prima muova sé stesso!” --Socrate
                </StyledParagraph>
            </StyledParagraphsBox>
        </StyledTextBox>
    )
}

export default TextBox