export default (WrappedComponent) => {
    return function wrappedRender(originalProps) {
        const {extraProp, ...restProps} = originalProps

        return (
            <WrappedComponent {...restProps} injectedProp={injectedProp}/>
        )
    }
}