import {useMemo} from "react";

export const useBlockResize = (nameOfClass, resizeFunc) => {
    const blocksResize = UseMemo(() =>
    {

        return nameOfClass;
    }, [resizeFunc, nameOfClass])

    return blocksResize;
}