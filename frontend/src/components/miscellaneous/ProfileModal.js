import { ViewIcon } from "@chakra-ui/icons";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Button,
  useDisclosure,
  IconButton,
  Text,
  Image,
  FormControl,
  FormLabel,
  Input,
  toast,
} from "@chakra-ui/react";
import { useState } from "react";



// const postDetails = (pics) => {
//   // const [pic, setPic] = useState();
//   // const [picLoading, setPicLoading] = useState(false);
//   //setPicLoading(true);
//   if (pics === undefined) {
//     toast({
//       title: "Please Select an Image!",
//       status: "warning",
//       duration: 5000,
//       isClosable: true,
//       position: "bottom",
//     });
//     return;
//   }
//   console.log(pics);
//   if (pics.type === "image/jpeg" || pics.type === "image/png") {
//     const data = new FormData();
//     data.append("file", pics);
//     data.append("upload_preset", "mern_chat_app");
//     data.append("cloud_name", "dgj1jy1wq");
//     fetch("https://api.cloudinary.com/v1_1/dgj1jy1wq/image/upload", {
//       method: "post",
//       body: data,
//     })
//       .then((res) => res.json())
//       .then((data) => {
//         setPic(data.url.toString());
//         console.log(data.url.toString());
//         setPicLoading(false);
//       })
//       .catch((err) => {
//         console.log(err);
//         setPicLoading(false);
//       });
//   } else {
//     toast({
//       title: "Please Select an Image!",
//       status: "warning",
//       duration: 5000,
//       isClosable: true,
//       position: "bottom",
//     });
//     setPicLoading(false);
//     return;
//   }
// };

const ProfileModal = ({ user, children }) => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      {children ? (
        <span onClick={onOpen}>{children}</span>
      ) : (
        <IconButton d={{ base: "flex" }} icon={<ViewIcon />} onClick={onOpen} />
      )}
      <Modal size="lg" onClose={onClose} isOpen={isOpen} isCentered>
        <ModalOverlay />
        <ModalContent h="410px">
          <ModalHeader
            fontSize="40px"
            fontFamily="Work sans"
            d="flex"
            justifyContent="center"
          >
            {user.name}
          </ModalHeader>
          <ModalCloseButton />
          <ModalBody
            d="flex"
            flexDir="column"
            alignItems="center"
            justifyContent="space-between"
          >
            <Image
              borderRadius="full"
              boxSize="150px"
              src={user.pic}
              alt={user.name}
            />
            {/* <FormControl id="pic">
              <FormLabel>Change Profile Pic</FormLabel>
              <Input
                type="file"
                p={1.5}
                accept="image/*"
                onChange={(e) => postDetails(e.target.files[0])}
              />
            </FormControl> */}
            <Text
              fontSize={{ base: "28px", md: "30px" }}
              fontFamily="Work sans"
            >
              Email: {user.email}
            </Text>
          </ModalBody>
          <ModalFooter>
            <Button onClick={onClose}>Close</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};

export default ProfileModal;
