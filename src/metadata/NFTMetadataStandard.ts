import MimeType from 'mime/Mime';
import { Locale } from 'locale';
import MarkdownIt from 'markdown-it'

interface Url {
	url: String
}

interface NFTAddress {
	/**
	 * The protocol address of the registered app
	 */
	contractAddress: String;
	/**
	 * The token id as NFT
	 */
	tokenId: String;
}

interface MetadataMedia {
	item: Url;
	/**
	 * This is the mime type of media
	 * https://github.com/jshttp/mime-types
	 */
	type?: MimeType | CurtionType | null;

	/**
	 * The alt tags for accessibility
	 */
	altTag?: String | null;

	/**
	 * The cover for any video or audio you attached
	 */
	cover?: String | null;
}

enum MetadataVersions {
	one = '1.0.0'
}

enum MetadataDisplayType {
	number = 'number',
	string = 'string',
	date = 'date',
}

interface MetadataAttribute {
	displayType?: MetadataDisplayType | undefined | null;
	traitType?: String | undefined | null;
	value: String;
}

enum ContentWarning {
	NSFW = 'NSFW',
	SENSITIVE = 'SENSITIVE',
	SPOILER = 'SPOILER',
}

enum MainFocus {
	VIDEO = 'VIDEO',
	IMAGE = 'IMAGE',
	ARTICLE = 'ARTICLE',
	TEXT_ONLY = 'TEXT_ONLY',
	AUDIO = 'AUDIO',
	LINK = 'LINK',
	EMBED = 'EMBED',
}

enum CurtionType {
	/**
	 * Presented as a CV or profile NFT that explains who we are, what we have and what we do.
	 */
	PROFILE = 'PROFILE',

	/**
	 * Expressed as basic posts, such as microblogs, articles, audio, video, etc., 
	 * used to show the creator's gigs, ideas, work, life, knowledge, tastes, etc., 
	 * which will be minted as NFTs by default, so they can be collected by fans and 
	 * used as creator's soulband items.
	 */
	CONTENT_ONLY = 'CONTENT_ONLY',

	/**
	 * Various organic combinations of content are also a way of curation, 
	 * just like the mutual achievement of video and music in tiktok, 
	 * which will produce a magical chemical reaction.
	 */
	COMBINED ='COMBINED',

	/**
	 * Equally and purposefully combine content into a list, such as a jazz playlist.
	 */
	PROTFOLIO = 'PROTFOLIO',

	/**
	 * Featured or specific types of information streams, such as news, funny videos, audio novels, etc.
	 */
	FEED = 'FEED',

	/**
	 * Various types of applications developed based on thebards protocol.
	 */
	DAPP = 'DAPP'
}

interface Metadata {
	/**
	 * The metadata version.
	 */
	version: MetadataVersions;

	/**
	 * The curation type
	 */
	curation_type: CurtionType;

	/**
	* The metadata id can be anything but if your uploading to ipfs
	* you will want it to be random.. using uuid could be an option!
	*/
	metadata_id: String;

	/**
	 * A human-readable description of the item.
	 */
	description?: MarkdownIt | String | undefined | null;

	/**
	 * The content of a Curation. If this is blank `media` must be defined or its out of spec.
	 */
	content?: MarkdownIt | String | undefined | null;

	/**
	 * IOS 639-1 language code aka en or it and ISO 3166-1 alpha-2 region code aka US or IT aka en-US or it-IT
	 * Full spec > https://tools.ietf.org/search/bcp47
	 */
	locale: Locale;

	/**
	 * Ability to tag your Curation
	 */
	tags?: String[] | undefined | null;

	/**
	 * Ability to add a content warning
	 */
	contentWarning?: ContentWarning | undefined | null;

	/**
	 * Main content focus that for this Curation
	 */
	mainContentFocus: MainFocus;

	/**
	 * This is the URL that will appear below the asset's image on OpenSea and others etc
	 * and will allow users to leave OpenSea and view the item on the site.
	 */
	external_url?: Url | undefined | null;

	/**
	 * This is the URL that provide various data from off-chain,
	 * and the data still needs to meet the standards of NFT metadata.
	 */
	oracle_url?: Url | undefined | null;

	/**
	 * Name of the item.
	 */
	name: String;

	/**
	 * These are the attributes for the item, which will show up on the OpenSea and others NFT trading websites on the 
	 * item.
	 */
	attributes?: MetadataAttribute[] | undefined | null;

	/**
	 * legacy to support OpenSea will store any NFT image here.
	 */
	image?: Url | undefined | null;

	/**
	 * This is the mime type of image. This is used if you uploading more advanced cover images
	 * as sometimes IPFS does not emit the content header so this solves the pr
	 */
	imageMimeType?: MimeType | undefined | null;

	/**
	 * This is thebards supported attached media items to the Curation
	 */
	media?: MetadataMedia[] | undefined | null;

	/**
	 * In spec for OpenSea and other providers - also used when using EMBED main Curation focus
	 * A URL to a multi-media attachment for the item. The file extensions GLTF, GLB, WEBM, MP4, M4V, OGV,
	 * and OGG are supported, along with the audio-only extensions MP3, WAV, and OGA.
	 * Animation_url also supports HTML pages, allowing you to build rich experiences and interactive NFTs using JavaScript canvas,
	 * WebGL, and more. Scripts and relative paths within the HTML page are now supported. However, access to browser extensions is not supported.
  
	 */
	animation_url?: Url | undefined | null;

	/**
	 * Which NFT is this based on
	 */
	FromNFT?: NFTAddress | undefined | null;
}