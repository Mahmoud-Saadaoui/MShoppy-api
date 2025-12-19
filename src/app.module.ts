import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { UserModule } from './user/user.module';

@Module({
  imports: [MongooseModule.forRoot(process.env.MONGO_URL as string), UserModule],
  controllers: [],
  providers: [],
})

export class AppModule { }