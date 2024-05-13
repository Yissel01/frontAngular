export interface Website
{

}

export interface WebsiteRow{
  count: number;
  url: string;
  id: string;
}

export interface WebsiteTable{
  content: WebsiteRow[];
}

export interface WebsiteVerification{
  htmlCode: string;
  metaCode: string;
}

export interface checkWebsite{
  existMeta: boolean;
  existHTML: boolean;
}
