import {
	ComputeBudgetProgram,
	Connection,
	PublicKey,
	Transaction,
	TransactionInstruction,
	clusterApiUrl,
} from "@solana/web3.js";
import {
	ActionGetResponse,
	ActionPostRequest,
	ActionPostResponse,
	ACTIONS_CORS_HEADERS,
	createPostResponse,
	MEMO_PROGRAM_ID,
} from "@solana/actions";

export const GET = async (req: Request) => {
	const payload: ActionGetResponse = {
		icon: new URL("/logo.jpg", new URL(req.url).origin).toString(),
		label: "Blink",
		description: "DeVolt Blink.",
		title: "DeVolt",
	};

	return Response.json(payload, {
		headers: ACTIONS_CORS_HEADERS,
	});
};

export const OPTIONS = GET;

export const POST = async (req: Request) => {
	try {
		const body: ActionPostRequest = await req.json();

		let account: PublicKey;
		try {
			account = new PublicKey(body.account);
		} catch (err) {
			console.error("Invalid account", err);
			return Response.json("Invalid account", { status: 400 });
		}

		const transaction = new Transaction();

		transaction.add(
			ComputeBudgetProgram.setComputeUnitPrice({
				microLamports: 1000,
			}),
			new TransactionInstruction({
				programId: new PublicKey(MEMO_PROGRAM_ID),
				data: Buffer.from("This is a memo message from DeVolt"),
				keys: [],
			}),
		);

		transaction.feePayer = account;

		const connection = new Connection(clusterApiUrl("mainnet-beta"));
		transaction.recentBlockhash = (await connection.getLatestBlockhash()).blockhash;

		const payload: ActionPostResponse = await createPostResponse({
			fields: {
				transaction,
			},
		});

		return Response.json(payload, {
			headers: ACTIONS_CORS_HEADERS,
		})

	} catch (err) {
		console.error("An unknown error ocurred", err);
		return Response.json("An unknown error ocurred", { status: 400 });
	}
};
