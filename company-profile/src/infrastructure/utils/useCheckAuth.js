export function useCheckAuth({ component, withLayout, ...rest }) {
    return {
        Component: component,
        withLayout: withLayout,
        ...rest
    };
}

export default useCheckAuth;
