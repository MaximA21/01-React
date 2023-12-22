export function Tabs({children, buttons, ButtonsContainer ="menu"}) {

    return (
        <>
            <ButtonsContainer>
                {buttons}
                {buttons}
            </ButtonsContainer>
            {children}
        </>
    )
}