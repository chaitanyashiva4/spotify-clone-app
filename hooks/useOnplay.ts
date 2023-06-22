import { Song } from "@/types";
import usePlayer from "./usePlayer";
import useAuthModal from "./useAuthModal";
import { useUser } from "./useUser";
import useSubscribeModal from "./useSubscribeModal";

const useOnplay =  (songs:Song[])=>{
    const subscribeModal = useSubscribeModal()
    const player = usePlayer();
    const authModel = useAuthModal();
    const { user,subscription } = useUser()
    const onPlay = (id:string)=>{
        if(!user){
            return authModel.onOpen();
        }

        
        if (!subscription) {
            return subscribeModal.onOpen();
        }


        player.setId(id);
        player.setIds(songs.map((song)=>song.id));
    };
    return onPlay;
}

export default useOnplay;