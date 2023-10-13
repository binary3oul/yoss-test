import { FC } from "react";
import { MyAccount } from "../../model/types";

const MyAccount: FC<MyAccount> = ({ info }: MyAccount) => {
	const { photo, name, email } = info
  return (
    <div className="flex gap-2">
			<div className="flex items-center">
				<img src={photo}/>
			</div>
			<div className="flex flex-col">
				<strong className="text-base">{name}</strong>
				<span className="text-sm">{email}</span>
			</div>
		</div>
  );
};

export default MyAccount;
