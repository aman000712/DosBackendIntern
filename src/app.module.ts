import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { FileSystemStoredFile, NestjsFormDataModule } from 'nestjs-form-data';
import { FqasectionModule } from './fqasection/fqasection.module';
import { FileuploadModule } from './fileupload/fileupload.module';
import { HomesectionModule } from './homesection/homesection.module';
import { Fqasection } from './fqasection/entities/fqasection.entity';
import { Fileupload } from './fileupload/entities/fileupload.entity';
import { Homesection } from './homesection/entities/homesection.entity';
import { OurstaffsectionModule } from './ourstaffsection/ourstaffsection.module';
import { AddblogModule } from './addblog/addblog.module';
import { BannersectionModule } from './bannersection/bannersection.module';
import { Ourstaffsection } from './ourstaffsection/entities/ourstaffsection.entity';
import { Addblog } from './addblog/entities/addblog.entity';
import { Bannersection } from './bannersection/entities/bannersection.entity';
import { AddcourseModule } from './addcourse/addcourse.module';
import { OurplacementpartnersModule } from './ourplacementpartners/ourplacementpartners.module';
import { SucessstoriesModule } from './sucessstories/sucessstories.module';
import { Ourplacementpartner } from './ourplacementpartners/entities/ourplacementpartner.entity';
import { Sucessstory } from './sucessstories/entities/sucessstory.entity';
import { Addcourse } from './addcourse/entities/addcourse.entity';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      envFilePath: '.env',
    }),

    NestjsFormDataModule.config({
      storage: FileSystemStoredFile,
      fileSystemStoragePath: 'uploads',
      isGlobal: true,
      autoDeleteFile: false,
      limits: {
        files: 10,
        fileSize: 1024 * 1024 * 50,
      },
      cleanupAfterSuccessHandle: false,
    }),

    TypeOrmModule.forRoot({
      type: 'mysql',
      port: 3306,
      host: 'localhost',
      username: 'root',
      password: 'Amanxtteri0007@',
      database: 'dos',
      // autoLoadEntities: true,
      entities: [
        Fileupload,
        Fqasection,
        Homesection,
        Ourstaffsection,
        Addblog,
        Bannersection,
        Ourplacementpartner,
        Sucessstory,
        Addcourse,
        

      ],
      extra: {
        connectTimeout: 3000,
      },
      synchronize: true,
    }),

    FqasectionModule,

    FileuploadModule,

    HomesectionModule,

    OurstaffsectionModule,

    AddblogModule,

    BannersectionModule,

    AddcourseModule,

    OurplacementpartnersModule,

    SucessstoriesModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
