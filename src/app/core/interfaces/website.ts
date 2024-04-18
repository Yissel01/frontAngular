export interface Website
{

}

export interface WebsiteRow{
  count: number;
  url: string;
  html: boolean;
  meta: boolean;
}

export interface WebsiteTable{
  content: WebsiteRow[];
}
