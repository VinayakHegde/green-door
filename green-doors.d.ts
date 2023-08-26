type Row = {
	id: number;
	name: string;
	make: string;
	colour: string;
	code: string;
}

type ItemProps = Row & {
	setIsDeleted: Dispatch<SetStateAction<boolean>>;
}

type MasterFormProps = {
	item: Row | null;
	isCreate: boolean;
	callback: () => void;
}

type InputProps = import('react').DetailedHTMLProps<import('react').InputHTMLAttributes<HTMLInputElement>, HTMLInputElement> & {
	label: string;
}

type SelectOption = {
	value: string;
	label: string;
}

type SelectProps = import('react').DetailedHTMLProps<import('react').SelectHTMLAttributes<HTMLSelectElement>, HTMLSelectElement> & {
	label: string;
	options: SelectOption[];
}

type PrevNextProps = {
	prev?: string;
	next?: string;
	stage: number;
	onChange: (stage: string, step: number) => void;
	isValid: boolean;
}

type ButtonVariant = 'primary' | 'secondary' | 'danger';

type ButtonProps = import('react').DetailedHTMLProps<import('react').ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement> & {
	variant?: ButtonVariant;
};

type MainProps = import('react').DetailedHTMLProps<import('react').ButtonHTMLAttributes<HTMLMainElement>, HTMLMainElement>;

type User = {
	username: string;
	fullname: string;
};
type AuthContextProps = {
	user: User | null;
	setUser: (user: User | null) => void;
};