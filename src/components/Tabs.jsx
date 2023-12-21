export function Tabs({children, buttons, ButtonsContainer}) {

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