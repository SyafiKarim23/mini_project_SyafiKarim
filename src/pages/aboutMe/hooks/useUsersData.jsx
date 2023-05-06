import { useCallback, useState } from "react"
import { api } from "../../../api"
import { message } from "antd";


export const useGetUsers = () => {
    const [isLoading, setIsLoading] = useState(true)
    const [data, setData] = useState()

    const getData = useCallback(async () => {
        try {
            const res = await api.getUsers();
            console.log({ res });
            setData(res.data);
        } catch (err) {
            message.open({
                type: "Error",
                content: '${err?.message}',
            });

        } finally {
            setIsLoading(false)
            message.open({
                type: 'success',
                content: 'Berhasil Fetching Data',
            });
        }
    }, [])

    return [isLoading, data, getData];
};