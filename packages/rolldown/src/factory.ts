const h = (type: string, props: object, ...children: any[]) => {
    return {
        type,
        props: {
            ...props,
            children
        }
    };
};

const f = Symbol("Fragment");

h.f = f;

export { h };
