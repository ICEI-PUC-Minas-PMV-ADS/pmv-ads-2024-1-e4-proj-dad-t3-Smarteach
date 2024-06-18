import { FlatList } from "react-native"
import RenderUserList from "./RenderUserList"

export const UserList = ({ data, editLink }) => {

    return (
        <FlatList
            data={data}
            keyExtractor={(item, index) => `${item.name}-${index}`}
            renderItem={({ item }) => <RenderUserList item={item} editLink={editLink} />}
        />
    )
}