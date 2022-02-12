import { Request } from "express";
import { omit } from "ramda";

export class BaseCrudController {
  protected Model: any = null;
  protected excludedEditFields: string[] = ['_id', 'id', 'createdAt', 'updatedAt'];

  private getExcludedEditFields = omit(this.excludedEditFields);

  public getAll = () => {
    return this.Model.find({}).lean();
  }

  public getById = (req: Request) => {
    const { id } = req.params;
    return this.Model.findOne({ _id: id }).lean();
  }

  public create = async (req: Request) => {
    const data = this.getExcludedEditFields(req.body);
    const res = await this.Model.create(data);
    return this.Model.findOne({ _id: res.get('_id') }).lean();
  }

  public update = async (req: Request) => {
    const { id } = req.params;
    const data = this.getExcludedEditFields(req.body);
    await this.Model.updateOne({ _id: id }, { $set: data });
    return this.Model.findOne({ _id: id }).lean();
  }

  public remove = async (req: Request) => {
    const { id } = req.params;
    const data = await this.Model.findOne({ _id: id }).lean();
    const { deletedCount } = await this.Model.deleteOne({ _id: id });
    if (deletedCount === 0) {
      throw new Error(`No deleted one with ID: ${id}`);
    }
    return data;
  };
}