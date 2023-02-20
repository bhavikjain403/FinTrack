import { Avatar, Text, Paper } from "@mantine/core";
import EditProfileButton from "./EditProfileButton";

interface UserInfoActionProps {
  avatar: string;
  name: string;
  email: string;
}

export function UserInfo({ avatar, name, email }: UserInfoActionProps) {
  return (
    <Paper
      radius="md"
      p="sm"
      mb="xl"
      sx={(theme) => ({
        backgroundColor: theme.white,
      })}
    >
      <Avatar src={avatar} size={60} radius={60} mx="auto" />
      <Text
        align="center"
        color="blue"
        size="lg"
        transform="uppercase"
        weight={800}
        mt="md"
      >
        {name}
      </Text>
      <Text align="center" color="blue" size="lg" mb="sm" weight={500}>
        {email}
      </Text>
      <EditProfileButton />
    </Paper>
  );
}
