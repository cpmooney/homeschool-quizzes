import { defineEventHandler, H3Event } from "h3";
import { readLog } from '~/lib/logger'

export default defineEventHandler(async (event: H3Event) => readLog())
